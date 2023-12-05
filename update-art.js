import fs from 'fs'
import jimp from 'jimp'

/*
First 66 images in art/assets are in reverse chronological order
After 20231204_202512-min.png, images will be added in chronological order
=> Modify code if after 12/5/23

Note: writeFile will overwrite file
*/

const getFiles = (dir, files = []) => {
    const fileList = fs.readdirSync(dir)
    for (const file of fileList) {
        const name = `${dir}/${file}`
        files.push(name)
    }
    return files
}

const getImg = async files => {
    const img = {}
    files.reverse()
    for (const file of files) {
        const image = await jimp.read(file)
        const name = file.split('/')
        img[name[name.length - 1]] = image.bitmap.width > image.bitmap.height ? 'landscape' : 'portrait'
    }
    return img
}

getImg(getFiles('app/art/assets'))
.then(files => {
    const content = 'const art = ' + JSON.stringify(files)
    fs.writeFile('app/art/art.js', content, err => { if (err) console.error(err) })
})
.catch(e => console.log(e + 'then error'))
