#include <stdio.h>
int main()
{
    int num1, num2;
    int res;

    printf("enter num1:-");
    scanf("%d", &num1);
    printf("enter num2:-");
    scanf("&d", &num2);
    printf("1.+,2.-,3.%,4.*,5./");
    scanf("%") 
    switch  (operation)
    {
    case '+':
        res = num1 + num2;
        printf("%d", res);
        break;
    case '-':
        res = num1 - num2;
        printf("%d", res);
        break;
    case '*':
        res = num1 * num2;
        printf("%d", res);
        break;
    case '/':
        res = num1 / num2;
        if (num2 = a)
        {
            printf("it is not possible to divide any number by 0");
        }
        else
        {
            printf("%d", res);
        }
        

        break;
    case '&':
        res = num1 % num2;
        printf("%d", res);
        break;

    default:
        break;
    }
    return 0;
}