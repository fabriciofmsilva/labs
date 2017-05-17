(define (square x) (* x x))

(define (sum-of-squares x y)
    (+ (square x) (square y)))

(define (sum-two-largest-squares x y z)
  (if (> x y)
      (if (> y z) (sum-of-squares x y) (sum-of-squares x z))
  (if (> x z) (sum-of-squares x y) (sum-of-squares y z))))

(sum-two-largest-squares 3 2 1)

(sum-two-largest-squares 1 3 2)

(sum-two-largest-squares 2 1 3)
