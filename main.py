def fib():
    a = 0
    b = 1
    
    basic.show_number(a)
    basic.show_number(b)
    for k in range(30):
        c = a + b
        basic.show_number(c)
        a = b
        b = c

basic.forever(fib)