#include <iostream>
#include <string>
using namespace std;

class ParantA
{
};

class ChildA : public ParantA
{
};

class ChildB : public ParantA
{
};

class ChildC : public ChildA, public ChildB
{
};

int
main()
{

    return 0;
}