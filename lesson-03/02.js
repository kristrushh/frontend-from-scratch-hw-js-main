// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num) {
    if (num % 2 == 1) {
        return false
    } else if (num % 2 == 0) {
        return true
    }
}
isEven(3)
