import { Router } from 'express';
import pool from '../db';
import { Request, Response } from 'express';

const router = Router();

// get comments for a post
router.get('/post/:postId', async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    const result = await pool.query('SELECT * FROM comments WHERE post_id = $1', [postId]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// add a comment to a post
router.post('/', async (req: Request, res: Response) => {
  try {
    const { user_id, post_id, body } = req.body;
    const result = await pool.query(
      `INSERT INTO comments (user_id, post_id, body) VALUES ($1, $2, $3) RETURNING *`,
      [user_id, post_id, body]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;