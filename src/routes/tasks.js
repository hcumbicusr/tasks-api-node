import {Router} from 'express';
import { deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask } from '../controllers/tasks';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoints
 */


/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get all tasks
 *      tags: [Tasks]
 */
router.get('/tasks', getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Get total tasks counter
 *      tags: [Tasks]
 */
router.get('/tasks/count', getTaskCount);

/**
 * @swagger
 * /tasks/:id:
 *  get:
 *      summary: Get task by id
 *      tags: [Tasks]
 */
router.get('/tasks/:id', getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Save a new task
 *      tags: [Tasks]
 */
router.post('/tasks', saveTask);

/**
 * @swagger
 * /tasks:
 *  delete:
 *      summary: Delete a task by id
 *      tags: [Tasks]
 */
router.delete('/tasks/:id', deleteTask);

/**
 * @swagger
 * /tasks/:id:
 *  put:
 *      summary: Update task by id
 *      tags: [Tasks]
 */
router.put('/tasks/:id', updateTask);

export default router;