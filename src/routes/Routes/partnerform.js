const express = require('express');
const partnerApplicationData = require('../../modals/partnerformData');
let partnerformRouter = express.Router();

partnerformRouter.post('/', async function (req, res) { 
console.log(req.body)
    try{
    let item = {
        name: req.body.members.name,
        email: req.body.members.email,
        phone: req.body.members.phone,
        firm: req.body.members.firm,
        address: req.body.members.address,
        district: req.body.members.district,
        officeSpace: req.body.members.officeSpace,
        report: req.body.members.report,
        expect: req.body.members.expect,
        profile: req.body.members.Dateprofile,
        employeeCount: req.body.members.employeeCount,
        creation_date: new Date(),

    }
    let newPartner = await  partnerApplicationData(item);
    await newPartner.save()
        res.send(true)
    }
    catch {
        res.send(false)
    }
});

  //Delete academic route||to admin
  partnerformRouter.post('/partner/remove', (req, res) => {
    console.log(req.body);
    id = req.body._id
    console.log(` inside remove ${id}`);
    partnerApplicationData.deleteOne({ '_id': id })
        .then(function (partner) {
            console.log('success')
            res.send(partner);
        });

});

module.exports = partnerformRouter;