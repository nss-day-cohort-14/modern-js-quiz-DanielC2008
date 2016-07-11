describe("the specificaion for Robots", function() {
	let Rob = new Robot();
	let Rob2 = new Robot();

	it("should have a Robot function", function() {
		expect(Robot).toBeDefined();
	});

	it("should have Robot properties robot, name, health, attack", function(){
		expect(Rob.robot).toBe(true);
		expect(Rob.name).toBe("Unnamed Killer");
		expect(Rob.health).toBe(null);
		expect(Rob.attack).toBe(null);
	});

	it("should have an attack function", function() {
		expect(attack).toBeDefined();
	});

	it("should have robots attack", function(){
		Rob.health = 10;
		Rob2.health = 11;
		Rob.attack = 11;
		Rob2.attack = 10;
		expect(Rob2.health - Rob.attack).toBe(0);
	});
});