; 1.10 exercise
(define (A x y)
  (cond ((= y 0) 0)
        ((= x 0) (* 2 y))
        ((= y 1) 2)
        (else (A x (- y 1))))))

(A 1 10) ;=> 2
(A 2 4) ; => 2
(A 3 3) ; => 2

(define (f n) (A 0 n)) ; 2n
(define (g n) (A 1 n)) ;
(define (h n) (A 2 n)) ;
(define (k n) (* 5 n n)) ; 5n2
