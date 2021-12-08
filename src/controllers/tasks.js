import {connect} from '../database';

export const getTasks = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tasks");
    res.json(rows);
}

export const getTask = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tasks where id = ?", [req.params.id]);
    if ( rows.length == 0 ) {
        res.sendStatus(404);
    }
    res.json(rows[0]);
}

export const getTaskCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT COUNT(*) as n FROM tasks");
    res.json(rows[0].n);
}

export const saveTask = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query("INSERT INTO tasks(title, description) VALUES(?,?)", [
        req.body.title,
        req.body.description
    ]);
    res.json({
        id: result.insertId,
        ...req.body,
    });
}

export const deleteTask = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query("DELETE FROM tasks where id = ?", [req.params.id]);
    res.sendStatus(204);
}

export const updateTask = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query("UPDATE tasks SET ? WHERE id = ?", [
        req.body,
        req.params.id
    ]);
    res.sendStatus(204);
}