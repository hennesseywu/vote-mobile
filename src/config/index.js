/**
 * build: 线上使用
 * dev: qa环境
 * sandbox: sandbox环境
 * local: 本地调试
 */

export default {
    href: {
        build: 'https://t1.tiejin.cn',
        dev: 'https://t1-qa.tiejin.cn',
    },
    file: {
        build: 'https://file.tiejin.cn',
        dev: 'https://file-qa.tiejin.cn',
    },
    server: {
        build: 'https://api.tiejin.cn/command/',
        dev: ' https://api.youku.com/uploads',
    },
    download: {
        build: 'https://download.tiejin.cn/?adid=closer-t1&fs=false&microlink=https%3a%2f%2fa.app.qq.com%2fo%2fsimple.jsp%3fpkgname%3dcom.ums.closer%26ckey%3dCK1409137336588',
        dev: 'https://download-qa.tiejin.cn/?adid=closer-t1&fs=false&microlink=https%3a%2f%2fa.app.qq.com%2fo%2fsimple.jsp%3fpkgname%3dcom.ums.closer%26ckey%3dCK1409137336588',
    },
    wxAuthorization: {
        build: 'https://h5.tiejin.cn/redirect?redirectUrl=',
        dev: 'https://h5-sandbox.tiejin.cn/redirect?redirectUrl=',
    }
}