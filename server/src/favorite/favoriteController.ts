import { Request, Response } from 'express';

export const getFavorites = async (req: Request, res: Response) => {
  try {
    // TODO: get favorite
    const favorites: any[] = [];
    res.json(favorites);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ messag: error.message });
    } else {
      res.status(500).json({ message: 'Unexpected error' });
    }
  }
};

export const addFavorite = async (req: Request, res: Response) => {
  try {
    //TODO: add favorite
    const favorite = {};
    res.json(favorite);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ messag: error.message });
    } else {
      res.status(500).json({ message: 'Unexpected error' });
    }
  }
};

export const removeFavorite = async (req: Request, res: Response) => {
  try {
    //TODO: delete favorite
    res.status(204);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ messag: error.message });
    } else {
      res.status(500).json({ message: 'Unexpected error' });
    }
  }
};
