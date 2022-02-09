import { PrintHello, PrintGoodMorning, PrintWhenOver18,PrintGoodNight ,PrintEmail} from "./Admin";

describe("PrintHello test", () => {
  it("should print hello", () => {
    const result = PrintHello();
    expect(result).toEqual("hello user");
  });
});

describe("printGoodMorning test", () => {
  it("should print Good Morning whit name", () => {
    const result = PrintGoodMorning("name");
    expect(result).toEqual("good morning name");
  });

  it("contain user name ", () => {
    const result = PrintGoodMorning("name");
    expect(result).toContain("name");
  });
});

describe("printWhenOver18 test", () => {
  it("should print Good Morning whit name when age over 18 ", () => {
    const result = PrintWhenOver18(19, "name");
    expect(result).toEqual("good morning name");
  });
  it("should print noting ",()=>{
    const result = PrintWhenOver18(17, "name");
    expect (result).toBeFalsy();
  })
it("should contain user name",()=>{
    const result = PrintWhenOver18(19, "name");
    expect(result).toContain("name");
})

});


describe("Print Good Night test",()=>{
    it("should print h1 element whit good night string",()=>{
        const result=PrintGoodNight();
        expect(result).toEqual(<h1>good night</h1>)
    })
    it("test that no error ",()=>{
        const result=PrintGoodNight();
        expect(result).not.toEqual('Error');

    })
    it("test truthy ",()=>{
        const result=PrintGoodNight();
        expect(result).toBeTruthy();

    })

} )

describe("printEmail test",()=>{
    it("should return a element email",()=>{
        const result=PrintEmail("matan@gmail.com");
        expect(result).toEqual(<a href="matan@gmail.com"></a>)

    })

    it("should contain user email",()=>{
        const result=PrintEmail("matan@gmail.com");
        expect(result).toBeTruthy();

    })


})

