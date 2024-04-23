import { faker } from "@faker-js/faker";

export const data = [
  ...Array.from({ length: 30 }, (_, i) => ({
    id: String(i + 1),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    createdAt: faker.date.past().toISOString(),
    checkedInAt: i % 2 === 0 ? faker.date.recent().toISOString() : null,
  })),
];
