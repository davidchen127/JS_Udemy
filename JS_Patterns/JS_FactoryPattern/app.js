function MemberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === 'basic') {
      member = new BasicMembership(name);
    } else if (type === 'pro') {
      member = new ProMembership(name);
    } else if (type === 'ultra') {
      member = new UltraMembership(name);
    } else {
      member = new SecretMembership(name);
    }

    member.type = type;
    member.define = function () {
      console.log(`${this.name} (${this.type}: ${this.cost})`);
    };
    return member;
  };
}

const BasicMembership = function (name) {
  this.name = name;
  this.cost = '$100';
};
const ProMembership = function (name) {
  this.name = name;
  this.cost = '$200';
};
const UltraMembership = function (name) {
  this.name = name;
  this.cost = '$500';
};
const SecretMembership = function (name) {
  this.name = name;
  this.cost = 'free';
};
const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Tom', 'pro'));
members.push(factory.createMember('Jung', 'ultra'));
members.push(factory.createMember('David', 'friend'));
members.push(factory.createMember('Penny', 'relative'));
members.push(factory.createMember('Linda', 'PR'));

// console.log(members);

members.forEach(function (member) {
  member.define();
});
