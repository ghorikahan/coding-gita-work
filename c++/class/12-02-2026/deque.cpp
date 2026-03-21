#include <iostream>
#include <deque>
using namespace std;

int main(){
    deque<int> d = {1,2,3,4};

    d.push_back(5);

    for(int value : d){
        cout << value << " ";
    }

    d.push_front(0);

    for(int value : d){
        cout << value << " ";
    }

    return 0;
}