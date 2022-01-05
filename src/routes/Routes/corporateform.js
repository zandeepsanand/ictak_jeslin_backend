const express = require('express');
const corporateApplicationData = require('../../modals/corporateformData');
let corporateformRouter = express.Router();

corporateformRouter.post('/', async function (req, res) {

try{
    let members = {

        name: req.body.members.name,
        address: req.body.members.address,
        website: req.body.members.website,
        head: req.body.members.head,
        nature: req.body.members.nature,
        typeof: req.body.members.typeof,
        identityNo: req.body.members.identityNo,
        GST: req.body.members.GST,
        nameofContact: req.body.members.nameofContact,
        phone: req.body.members.phone,
        email: req.body.members.email,
        TechnicalSkill: req.body.members.TechnicalSkill,
        employeeCount: req.body.members.employeeCount,
        hire: req.body.members.hire,
        patents: req.body.members.patents,
        collaborate: req.body.members.collaborate,
        details: req.body.members.details,
        creation_date: new Date(),
    }
    console.log("b4"+members);
    let newcorporate = await corporateApplicationData(members);
    console.log(req.body.members);
   await newcorporate.save()
        res.send(true)
    }
    catch {
        res.send(false)
    }

});

module.exports = corporateformRouter;