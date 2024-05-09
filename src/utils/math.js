function generateRandomInt(min = 0, max = 0) {
    if (min > max) {
      return max;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generateRandomFloat(min = 0.0, max = 1.0, fixed = 1) {
    if (min > max) {
      return max;
    }
    return parseFloat((Math.random() * (max - min) + min).toFixed(fixed));
  }
  
  /**
   *
   * @param min 최소값 (이상)
   * @param max 최대값 (이하)
   * @param option fixed : 생성할 소수점 자리수
   * @returns 랜덤수
   */
  function generateRandomNumber(min, max, option) {
    if (min > max) {
      return max;
    }
    if (option) {
      const { fixed } = option;
      if (fixed) {
        return generateRandomFloat(min, max, fixed);
      }
    }
    return generateRandomInt(min, max);
  }
  
export default generateRandomNumber;