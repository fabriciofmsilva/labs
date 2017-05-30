; linear recursion and iteration

; a linear recursive process for computing 6!
(define (factorial n)
  (if (= n 1)
      1
      (* n (factorial (- n 1)))))

; a linear iterative process for computing 6!
(define (factorial n)
  (fact-iter 1 1 n))
(define (fact-iter product counter max-count)
  (if (> counter max-count)
      product
      (fact-iter (* counter product)
                 (+ counter 1)
                 max-counter)))
