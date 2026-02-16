import { faker } from '@faker-js/faker';

class UserApi{

    static register(){
        return cy.request({
            url: "/api/v1/users/register",
            method: "POST",
            body: {
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                email: faker.internet.email(),
                password: "Test-12345",
            },
        })
    }

}
export default UserApi;