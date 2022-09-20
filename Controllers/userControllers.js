import User from '../models/usersModel.js'
import mongoose from 'mongoose'

export var getUsers = async (req, res) => {
    try {

        const users = await User.find();
        res.status(200).json(users);
        
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const getUser = async (req, res) => {
    try
    {
        const upUser = await User.findById(req.params.id);
        res.status(201).json(upUser);
    }catch (error) 
    {
        res.status(404).json({ message: error.message});
    }
}
//wesh
export const createUsers = async (req, res) => {
    const body = req.body;
    const newUser = new User(body);

    try {

        await newUser.save();

        res.status(201).json(newUser);
        
    } catch (error) {

        res.status(404).json({ message: error.message});
        
    }
}


export const deleteUser = async (req, res) => {
    try
    {
        await User.findByIdAndDelete(req.params.id);
        res.status(201).json(req.params.id+' : supprimer');
        console.log(req.params.id+' : supprimer')
    }catch (error) 
    {
        res.status(404).json({ message: error.message});
    }
}

export const updateUser = async (req, res) => {

    await User.findByIdAndUpdate(req.params.id, {name: req.body.name, firstname: req.body.firstname ,email: req.body.email});

    res.status(201).json(req.params.id+' : update');

    console.log(req.params.id+' : update')

    res.json(updateUser);
}