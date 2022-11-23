export function validateValues() {
    return (val: string) => {
      const isValid = Boolean(val);
      return isValid || 'Please enter a number';
    };
  }

  export function ShowReponse(result: number) {
    console.log(`The answer is ${result}`);
  }