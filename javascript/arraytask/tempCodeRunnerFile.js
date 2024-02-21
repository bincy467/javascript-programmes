let n1 = str1.length();
let n2 = str2.length();


if (n1 != n2)
    return false;


sort(str1.begin(), str1.end());
sort(str2.begin(), str2.end());


for (let i = 0; i < n1; i++)
    if (str1[i] != str2[i])
        return false;

return true;