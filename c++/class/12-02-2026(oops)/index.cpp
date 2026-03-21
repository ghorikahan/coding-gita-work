#include<iostream>
#include<string>
using namespace std;

// fucntion overlaod means when you are defining the same fucntion number of times in a same class but with either different number of argumnets or different data types...

class Poly{
    
    public:
    
       void add(int a, int b){
           cout << "Addition of two number is: " << a+b << endl;
       }
       
    
       void add(int a, int b, int c){
           cout << "Addition of two number is: " << a+b << endl;
       }
       
       int add(double a, double b){
           cout << "Addition of two number is: " << a+b << endl;
           return 0;
       }
       char add(string a, int b){
           cout << a + char(b) << endl;
           return 'A';
       }
    
};


int main(){
    
    Poly p1;
    
    p1.add(10, 20);
    int b = p1.add(12.23, 78.3);
    char c = p1.add("Samir" , 68);
    return 0;
}