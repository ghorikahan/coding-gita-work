#include <iostream>
#include <vector>
#include <fstream>
#include <algorithm>

using namespace std;

int main()
{
    cout << "Enter the size of the vector you want" << endl;
    int n;
    cin >> n;

    vector<int> v(n);

    for (int i = 0; i < n; i++)
    {
        cout << "Enter element " << endl;
        cin >> v[i];
    }

    sort(v.begin(), v.end());
    reverse(v.begin(), v.end());

    ofstream file;

    file.open("output.txt");
    for (int i : v)
    {
        file << i << endl;
    }
    file.close();

    return 0;
}