#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<string> operations = {"++X", "X++", "--X"};
    int x = 0;

    for (int i = 0; i < operations.size(); i++)
    {
        if (operations[i] == "X++" || operations[i] == "++X")
        {
            x++;
        }
        if (operations[i] == "X--" || operations[i] == "--X")
        {
            x--;
        }
    }

    return x;
    
    return 0;
}