"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
exports.newUser = functions.auth.user().onCreate((user) => {
    const signUp = {
        uid: user.uid,
        email: user.email,
        createdOn: user.metadata.creationTime,
        phoneNumber: user.phoneNumber
    };
    return admin.database().ref(`Private/User/${user.uid}/Profile`).set(signUp).then(() => {
        const ecocash = {
            name: 'Ecocash',
            ownerId: user.uid,
            amount: 0,
            securityHash: ''
        };
        const skrill = {
            name: 'Skrill',
            ownerId: user.uid,
            amount: 0,
            securityHash: ''
        };
        return admin.database().ref(`Private/User/${user.uid}/Accounts/Ecocash`).set(ecocash).then(() => {
            return admin.database().ref(`Private/User/${user.uid}/Accounts/Skrill`).set(skrill).then(() => {
                return true;
            });
        });
    }).catch(error => {
        return error;
    });
});
exports.referral = functions.database.ref('Public/Referrals/{refId}').onCreate(event => {
    const refData = event.val();
    console.log(refData);
    return admin.database().ref(`Private/User/${refData.uid}/Profile/Referral`).set(refData.code).then(() => {
        return true;
    });
});
//# sourceMappingURL=index.js.map