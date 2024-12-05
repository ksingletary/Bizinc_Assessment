import { Router } from 'express';
import pool from '../db';
import { Request, Response } from 'express';

const router = Router();

// get all posts
router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM posts');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// get a post by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM posts WHERE post_id = $1', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// create a new post
router.post('/', async (req: Request, res: Response) => {
  try {
    const { user_id, title_plaintext, body_plaintext, title_html, body_html, image_url, slug } = req.body;
    const result = await pool.query(
      `INSERT INTO posts (user_id, title_plaintext, body_plaintext, title_html, body_html, image_url, slug)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [user_id, title_plaintext, body_plaintext, title_html, body_html, image_url, slug]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;