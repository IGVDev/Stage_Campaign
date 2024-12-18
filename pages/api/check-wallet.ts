import type { NextApiRequest, NextApiResponse } from 'next';

type ErrorResponse = {
  message: string;
  details?: any;
}

type SuccessResponse = {
  success: boolean;
  prize?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { walletAddress } = req.body;
    
    if (!walletAddress) {
      res.setHeader('Content-Type', 'application/json');
      return res.status(400).json({ message: 'Wallet address is required' });
    }

    // Llamar a Firebase
    const firebaseUrl = 'https://us-central1-raffle-stage-baa32.cloudfunctions.net/checkWallet';
    console.log('Llamando a Firebase:', { url: firebaseUrl, wallet: walletAddress });

    const response = await fetch(firebaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ walletAddress }),
    });

    console.log('Respuesta de Firebase:', { 
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers)
    });

    // Obtener el texto de la respuesta
    const responseText = await response.text();
    console.log('Respuesta raw de Firebase:', responseText);

    // Si la respuesta no es exitosa
    if (!response.ok) {
      res.setHeader('Content-Type', 'application/json');
      return res.status(response.status).json({ 
        message: 'Error from Firebase',
        details: responseText
      });
    }

    // Intentar parsear la respuesta como JSON
    try {
      const data = JSON.parse(responseText);
      res.setHeader('Content-Type', 'application/json');
      return res.status(200).json(data);
    } catch (parseError) {
      console.error('Error parseando respuesta de Firebase:', parseError);
      res.setHeader('Content-Type', 'application/json');
      return res.status(500).json({ 
        message: 'Invalid JSON response from Firebase',
        details: responseText
      });
    }
  } catch (error: any) {
    console.error('Error general:', error);
    res.setHeader('Content-Type', 'application/json');
    return res.status(500).json({ 
      message: 'Server error',
      details: error.message 
    });
  }
}
