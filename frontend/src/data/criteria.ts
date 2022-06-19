enum attribute {
  COST,
  BENEFIT,
}

const criteriaWP = [
  {
    criteria: "attendance",
    attribute: attribute.COST,
    weight: 2,
  },
  {
    criteria: "age",
    attribute: attribute.COST,
    weight: 3,
  },
  {
    criteria: "salary",
    attribute: attribute.COST,
    weight: 4,
  },
  {
    criteria: "distance",
    attribute: attribute.COST,
    weight: 3,
  },
  {
    criteria: "gpa",
    attribute: attribute.COST,
    weight: 3,
  },
  {
    criteria: "psychotest",
    attribute: attribute.BENEFIT,
    weight: 2,
  },
];

const criteriaSAW = {};

export { criteriaWP, criteriaSAW, attribute };
