; 1.1.4 compound procedures
; procedure definitions
; squaring => to square something, multiply it by itself
(define (square x) (* x x))

; compound procedure
; (define (<name> <formal parameters>) <body>)

(square 21)
(square (+ 2 5))
(square (square 3))

; building block
; x2 + y2
;(+ (square x) (square y))
(define (sum-of-squares x y)
  (+ (square x) (square y)))

;(sum-of-squares 3 4)

(define (f a)
  (sum-of-squares (+ a 1) (* a 2)))

(f 5)
