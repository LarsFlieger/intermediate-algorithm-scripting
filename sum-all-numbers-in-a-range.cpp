#include <iostream>
#include <algorithm>

using namespace std;

int sumAll(int numbers[2]) {

    // If the numbers are the same, sum is 0
    if(numbers[0] == numbers[1])
        return 0;
    
    // Get the lower number and the higher one
    int lowerNumber = numbers[0] > numbers[1] ? numbers[1] : numbers[0];
    int higherNumber = numbers[0] > numbers[1] ? numbers[0] : numbers[1];

    // Loop from the lower number to the higher one and add the variable to the sum.
    int sum = 0;
    for(int i = lowerNumber; i <= higherNumber; i++) {
        sum += i;
    }

    return sum;
}

int main() {
    int numbers[2] = {1, 4};
    int sum = sumAll(numbers);
    cout << sum <<endl;
}