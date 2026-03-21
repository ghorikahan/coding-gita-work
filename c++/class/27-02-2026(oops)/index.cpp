#include<iostream>
#include<string>

using namespace std;

class Parent{
    public:
    //Data members....
        string name;
        int a;
          
    // Constructor....
        Parent(string name, int a){
              cout << "The parent constructor is called through children class first" << endl;
              this->name = name;
              this->a = a;
              cout << "The work is done..." << endl;
          }
          
    // Fucntion members...
        void display(){
              cout << "The name of parent class is:  " << this->name << " the value is " << this->a << endl;
          }
};

class Parent2 : public Parent{
    public:
    //Data members....
        string name2;
        int a1;
          
    // Constructor....
        Parent2(string name, string name2, int a, int a1): Parent(name, a){
              cout << "The parent2 constructor is called through children class first" << endl;
              this->name2 = name2;
              this->a1 = a1;
              cout << "The work is done..." << endl;
          }
          
    // Fucntion members...
        void display(){
              cout << "The name of parent class is:  " << this->name2<< " the value is " << this->a1<<endl;
          }
};


class Children : public Parent2{
    public:
    //Data members....
        string name1;
          
    // Constructor....
        Children(string name1, string name, string name2, int a, int a1): Parent2(name, name2, a, a1){
              cout << "The Children constructor is called after the parent construtor is called" << endl;
              this->name1 = name1;
              cout << "The work is done..." << endl;
          }
          
    // Fucntion members...
        void display1(){
              cout << "The name of children class is:  " << this->name1 << endl;
          }
};


int main(){
    
    Children b1("Parent", "Children", "parent2", 34, 56);
    b1.display1();
    b1.display();
    return 0;
}