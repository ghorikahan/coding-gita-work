#include <iostream>
#include <string>
using namespace std;

void voteEligibility(string name, int age)
{

    try
    {
        if (age > 18)
        {
            cout << "You are eligible to vote" << endl;
        }

        else
        {
            throw(age);
        }
    }
    catch (int age)
    {
        cout << "The user whose age is: " << age << " not eligible to vote" << endl;
    }
    catch (...)
    {
    }
}

int main()
{

    string name;
    int age;

    cout << "Enter you're name: " << endl;
    cin >> name;

    cout << "Enter you're age: " << endl;
    cin >> age;

    voteEligibility(name, age);

    return 0;
}