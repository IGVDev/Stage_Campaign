'use client'

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ethers } from 'ethers';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface SpinWheelProps {
  finalAngle?: number;
  onSpinEnd?: () => void;
  isVisible?: boolean;
}

const SpinWheel: React.FC<SpinWheelProps> = ({ 
  finalAngle = 45,
  onSpinEnd,
  isVisible = true
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [walletError, setWalletError] = useState('');
  const [hasClaimed, setHasClaimed] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('hasSpun') === 'true';
    }
    return false;
  });
  const [prizeMessage, setPrizeMessage] = useState('');

  useEffect(() => {
    if (hasClaimed) {
      localStorage.setItem('hasSpun', 'true');
    } else {
      localStorage.removeItem('hasSpun');
    }
  }, [hasClaimed]);

  useEffect(() => {
    const hasSpunBefore = localStorage.getItem('hasSpun');
    const savedMessage = localStorage.getItem('prizeMessage');
    if (hasSpunBefore === 'true') {
      setHasSpun(true);
      setHasClaimed(true);
      if (savedMessage) {
        setPrizeMessage(savedMessage);
        // Establecer el ángulo según el mensaje guardado
        let finalAngle = 0;
        if (savedMessage.includes('USDT')) {
          finalAngle = 45;
        } else if (savedMessage.includes('STAGE')) {
          finalAngle = 180;
        }
        setCurrentRotation(finalAngle);
      }
    }
  }, []);

  const checkWallet = async () => {
    console.log('1. Starting checkWallet');
    
    // Verificar si existe window.ethereum
    if (!(window as any).ethereum) {
      console.log('2. MetaMask is not installed');
      setWalletError('Please install MetaMask to continue.');
      setShowWalletModal(true);
      return false;
    }

    console.log('2. MetaMask is installed');

    try {
      console.log('3. Attempting to connect to MetaMask');
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      
      console.log('4. Requesting accounts');
      const accounts = await provider.send("eth_requestAccounts", []);
      console.log('5. Accounts obtained:', accounts);
      
      if (accounts.length === 0) {
        console.log('6. No accounts found');
        setWalletError('Please connect your wallet.');
        setShowWalletModal(true);
        return false;
      }

      const walletAddress = accounts[0].toLowerCase();
      console.log('6. Wallet connected:', walletAddress);
      
      try {
        if (hasClaimed) {
          setWalletError('You have already been rewarded.');
          setShowWalletModal(true);
          return false;
        }

        console.log('8. Making fetch to Firebase');
        const firebaseUrl = 'https://us-central1-raffle-stage-baa32.cloudfunctions.net/checkWallet';
        
        const response = await fetch(firebaseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ walletAddress })
        });

        console.log('9. Response status:', response.status);

        // Primero obtener la respuesta como texto
        const data = await response.json();
        console.log('Server response:', data);

        let finalAngle = 0;
        if (data.prize === "7") {
          console.log('Entering prize condition 7');
          // Premio USDT - ajustar este ángulo según la posición de la ruleta
          finalAngle = 45;
          const message = 'Congrats you won $5 STAGE!';
          setPrizeMessage(message);
          localStorage.setItem('prizeMessage', message);
          setHasClaimed(true);
          localStorage.setItem('hasSpun', 'true');
        } else if (data.prize === "8") {
          console.log('Entering prize condition 8');
          // Premio STAGE - ajustar este ángulo según la posición de la ruleta
          finalAngle = 180;
          const message = 'Congrats you won 5 USDT!';
          setPrizeMessage(message);
          localStorage.setItem('prizeMessage', message);
          setHasClaimed(true);
          localStorage.setItem('hasSpun', 'true');
        } else if (!data.success || data.message === 'wallet not found') {
          console.log('Entering wallet not found condition');
          // Sin premio - gira a una posición neutral
          finalAngle = 0;
          setPrizeMessage('This wallet hasn\'t staked during the campaign');
        } else {
          console.log('Entering else condition');
          finalAngle = 360;
          setPrizeMessage('An error occurred while checking your wallet');
        }

        console.log('Final angle selected:', finalAngle);
        // Agregamos 6 vueltas completas antes del ángulo final
        const totalRotation = (360 * 6) + finalAngle;
        setCurrentRotation(totalRotation);

        return totalRotation;
      } catch (error: any) {
        console.error('Error in the process:', error);
        // Manejo de errores específicos
        if (error.message?.includes('User rejected')) {
          setWalletError('Connection cancelled. Please try again.');
        } else if (error.message?.includes('JSON')) {
          setWalletError('Connection error. Please try again later.');
        } else {
          setWalletError('An error occurred. Please try again.');
        }
        setShowWalletModal(true);
        return false;
      }
    } catch (error: any) {
      console.error('Error in the process:', error);
      // Manejo de errores específicos
      if (error.message?.includes('User rejected')) {
        setWalletError('Connection cancelled. Please try again.');
      } else if (error.message?.includes('JSON')) {
        setWalletError('Connection error. Please try again later.');
      } else {
        setWalletError('An error occurred. Please try again.');
      }
      setShowWalletModal(true);
      return false;
    }
  };

  const handleSpin = async () => {
    console.log('Starting handleSpin');
    if (isSpinning || hasClaimed) {
      console.log('Already spinning or already spun');
      return;
    }
    
    setIsSpinning(true);
    const angle = await checkWallet();
    console.log('Angle received:', angle);
    if (angle === false) {
      console.log('Could not get angle');
      setIsSpinning(false);
      return;
    }

    console.log('Starting spin with angle:', angle);
    setIsSpinning(true);
    setHasSpun(true);

    // Solo agregamos las vueltas extras si es la primera vez que gira
    const totalRotation = hasClaimed ? angle : (360 * 6) + angle;
    setCurrentRotation(totalRotation);

    setTimeout(() => {
      console.log('Spin completed');
      setIsSpinning(false);
      onSpinEnd?.();
    }, 5000);
  };

  // Función para resetear el estado
  const resetState = () => {
    localStorage.removeItem('hasSpun');
    setHasClaimed(false);
    setPrizeMessage('');
    setCurrentRotation(0);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className="flex flex-col items-center gap-4 overflow-hidden p-4 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative w-[470px] h-[470px]"
              initial={{ rotate: 0 }}
              animate={{
                rotate: currentRotation
              }}
              transition={{
                duration: 5,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/images/spinwheel.png"
                alt="Ruleta de premios"
                width={470}
                height={470}
                priority
              />
            </motion.div>
            <button
              onClick={handleSpin}
              disabled={isSpinning || hasClaimed}
              className={`px-6 py-2 rounded-full font-bold ${
                isSpinning || hasClaimed
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#A98AF9] to-[#D0BEFF] hover:opacity-90'
              } text-white`}
            >
              {isSpinning ? 'Spinning...' : hasClaimed ? 'Spun' : 'Spin'}
            </button>
            <div id="spincenter" className='absolute top-[32px] '>
              <Image
                src="/images/spin-center.png"
                alt=""
                width={72}
                height={253}
                priority
              />
            </div>
            {prizeMessage && (
              <div className="bg-stage-card-dark w-[80%] shadow-xl text-white font-semibold py-4 px-7 rounded-full text-center absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {prizeMessage}
              </div>
            )}
            {/* {process.env.NODE_ENV === 'development' && (
              <button
                onClick={resetState}
                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Resetear Estado (Solo Dev)
              </button>
            )} */}
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog
        open={showWalletModal}
        onClose={() => setShowWalletModal(false)}
        aria-labelledby="wallet-dialog-title"
      >
        <DialogTitle id="wallet-dialog-title">
          Wallet Connection Required
        </DialogTitle>
        <DialogContent>
          {walletError}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowWalletModal(false)}>
            Close
          </Button>
          {!(window as any).ethereum && (
            <Button
              onClick={() => window.open('https://metamask.io/download/', '_blank')}
              color="primary"
            >
              Install MetaMask
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SpinWheel;
