#include <iostream>
#include <string>

using namespace std;

// Encapsulation class -> to secure the data members....

class BankAccount
{

    //   Sensitive Data members -> hide using private access modifier.....
private:
    int balance;
    string password;

public:
    string username;

    BankAccount(string name, string pass, int bal)
    {
        if (pass.size() != 0 && bal > 0)
        {
            username = name;
            password = pass;
            balance = bal;
            cout << "The Account is created.." << endl;
        }
        else
        {
            cout << "Warning:-> The required contains some harmful information pls check it once..." << endl;
        }
    }

    void getInfo()
    {
        cout << "The Account holder name is: " << this->username << endl;
        cout << "The current balance is: " << this->balance << endl;
        cout << "The password is: " << this->password << endl;
    }

    void setPass(string pass)
    {
        if (pass.size() != 0)
        {
            password = pass;
            cout << "The password is set and the new password is: " << this->password << endl;
        }
        else
        {
            cout << "The password doen't follow the required protocols pls check it before setting you're new password" << endl;
        }
    }

    void setBala(int bal)
    {
        if (bal > 0)
        {
            balance += bal;
            cout << "The current balance now is: " << this->balance << endl;
        }
        else
        {
            cout << "The amount must be greater than zero" << endl;
        }
    }
};

int main()
{

    BankAccount p1("Samir singh", "sam@2006", 78645);
    p1.getInfo();

    p1.setBala(100);

    return 0;
}