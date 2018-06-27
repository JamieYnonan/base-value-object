<?php

namespace BaseValueObject\Scalar;

/**
 * Class BaseFloat
 * @package BaseValueObject\Scalar
 */
abstract class BaseFloat extends BaseScalar
{
    protected $value;

    /**
     * BaseFloat constructor.
     *
     * @param float $value
     */
    public function __construct(float $value)
    {
        $this->setValue($value);
    }

    /**
     * In this method you must add all the necessary validations.
     *
     * @param float $value
     * @return void
     */
    abstract protected function setValue(float $value): void;

    /**
     * {@inheritdoc}
     *
     * @return float
     */
    public function value(): float
    {
        return $this->value;
    }
}
