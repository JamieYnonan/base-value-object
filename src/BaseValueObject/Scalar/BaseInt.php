<?php

namespace BaseValueObject\Scalar;

/**
 * Class BaseInt
 * @package BaseValueObject\Scalar
 */
abstract class BaseInt extends BaseScalar
{
    protected $value;

    /**
     * BaseInt constructor.
     *
     * @param int $value
     */
    public function __construct(int $value)
    {
        $this->setValue($value);
    }

    /**
     * In this method you must add all the necessary validations.
     *
     * @param int $value
     * @return void
     */
    abstract protected function setValue(int $value): void;

    /**
     * {@inheritdoc}
     *
     * @return int
     */
    public function value(): int
    {
        return $this->value;
    }
}
