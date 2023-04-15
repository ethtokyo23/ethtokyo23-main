// pages/api/mintNFT.ts
import type { NextApiRequest, NextApiResponse } from "next";

const mintNFT = async (req: NextApiRequest, res: NextApiResponse) => {
  const { to } = req.body;

  try {
    const response = await fetch(`${process.env.API_BASE_URL}/mint`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to }),
    });

    const data = await response.json();

    if (response.status === 200) {
      res.status(200).json({ transactionHash: data.transactionHash });
    } else {
      res.status(response.status).json({ message: data.message });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export default mintNFT;
