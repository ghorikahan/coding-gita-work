#include <iostream>
#include <string>
#include <fstream>

using namespace std;

int main()
{
    string onelinestatement;
    ifstream file1;
    // ofstream file;
    // file.open("sample.txt", ios::app);
    file1.open("sample.txt");

    if (file1.is_open())
    {
        // file << "first time using the file operation with the help of the ofstream method" << endl;
        cout << "the actual data is gona print for a given file below:" << endl;
        while (getline(file1, onelinestatement))
        {
            cout << onelinestatement << endl;
        }

        file1.close();
    }

    return 0;
}