import { Router } from 'express';
import pool from '../db';
import { Request, Response } from 'express';

const router = Router();

// get all users
router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// get a user by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// create a new user
router.post('/', async (req: Request, res: Response) => {
  try {
    const { username, password, first_name, last_name, email} = req.body;
    const result = await pool.query(
      `INSERT INTO users (username, password, first_name, last_name, email)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [username, password, first_name, last_name, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;