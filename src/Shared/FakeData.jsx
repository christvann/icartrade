import { faker } from '@faker-js/faker';

function createRandomCarList() {
    return {
        name: faker.vehicle.vehicle(),
        fuelType: faker.vehicle.fuel(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),
        image: 'https://i.pinimg.com/564x/57/e3/50/57e35040a429edaf4b23b844cdb96a99.jpg', 
        miles: 1000,
        gearType: 'Automatic',
        price: faker.finance.amount({ min: 500000000, max: 2000000000 }),
    };
}

const carList = faker.helpers.multiple(createRandomCarList, {
    count: 7,
});

export default {
    carList,
};
