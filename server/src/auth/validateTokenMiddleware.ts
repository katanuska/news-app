import { Request, Response, NextFunction } from 'express';
import { validateToken } from './authService';

export const validateTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('Validate token');
  if (!req.path.startsWith('/favorite')) {
    return next();
  }

  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const user = validateToken(token);
    if (user && user.verified) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    res.status(500).json({
      message: 'An unexpected error occurred while validating token.',
    });
  }
};
