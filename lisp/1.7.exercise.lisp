; 1.7 exercise

(define (sqrt-iter guess old-guess x)
  (if (good-enough? guess old-guess)
          guess
          (sqrt-iter (improve guess x)
                     guess
                     x)))

(define (improve guess x)
  (average guess (/ x guess)))

(define (average x y)
  (/ (+ x y) 2))

(define (good-enough? guess x)
  (< (abs (- guess old-guess)) 0.001))

(define (sqrt x)
  (sqrt-iter 1.0 0 x))
