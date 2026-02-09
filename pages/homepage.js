exports.HomePage=class HomePage{
    constructor(page){
        this.page = page
        this.register_link = page.getByRole('link', { name: 'REGISTER', exact: true })
    }
    async gotoHomePage(){
        await this.page.goto('https://demo.guru99.com/test/newtours/index.php');
        await this.register_link.click()
    }
}