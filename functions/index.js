const functions = require('firebase-functions');
const cors = require('cors')({ origin: true })
const fs = require('fs')
const uuid = require('uuid-v4')
const { Storage } = require('@google-cloud/storage')
const storage = new Storage ({
    projectId: 'photor-252ad',
    keyFilename: 'photor-functions.json'
})


exports.uploadImage = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        try {
            fs.writeFileSync('/tmp/imageToSave.jpg', request.body.image, 'base64')

            const bucket = storage.bucket('photor-252ad.appspot.com')
            const id = uuid()
            bucket.upload('/tmp/imageToSave.jpg', {
                uploadType: 'media',
                destination: `/posts/${id}.jpg`,
                metadata: {
                    metadata: {
                        contentType: 'image/jpeg',
                        firebaseStorageDownloadTokens: id
                    }
                }
            }, (error, file) => {
                if(error){
                    console.log(error)
                    return response.status(500).json({ error })
                } else {
                    const fileName = encodeURIComponent(file.name)
                    const imageURL = 'https://firebasestorage.googleapis.com/v0/b/' + bucket.name + '/o/' + fileName + '?alt=media&token=' + id
                    return response.status(201).json({ imageURL })
                }
            })
        } catch (error) {
            console.log(error)
            response.status(500).json({ error })
        }
    })
});
