import { Router } from 'express';
import pool from '../db';
import { Request, Response } from 'express';

const router = Router();

// Get all tags
router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM tags');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a tag
router.post('/', async (req: Request, res: Response) => {
  try {
    const { tag } = req.body;
    const result = await pool.query(
      `INSERT INTO tags (tag) VALUES ($1) RETURNING *`,
      [tag]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;