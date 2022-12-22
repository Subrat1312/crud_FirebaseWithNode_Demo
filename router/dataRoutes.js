import express from 'express'
const router=express.Router();
import {addData,getData,deleteData,updateData} from '../controller/dataController.js';

router.post("/", addData)
router.get('/',getData)
router.delete('/:id',deleteData)
router.put('/:id',updateData)
export default router;