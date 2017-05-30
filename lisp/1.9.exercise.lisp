; 1.9 exercise
(define (+ a b)
  (if (= a 0)
      b
      (inc (+ (dec a) b))))
(define (+ a b)
  (if (= a 0)
      b
      (+ (dec a (inc b)))))

; procedure one is recursive and procudure two is iterative.
