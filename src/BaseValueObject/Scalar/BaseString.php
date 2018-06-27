<?php

namespace BaseValueObject\Scalar;

/**
 * Class BaseString
 * @package BaseValueObject\Scalar
 */
abstract class BaseString extends BaseScalar
{
    protected $value;

    /**
     * BaseString constructor.
     *
     * @param string $value
     */
    public function __construct(string $value)
    {
        $this->setValue($value);
    }

    /**
     * In this method you must add all the necessary validations.
     *
     * @param string $value
     * @return void
     */
    abstract protected function setValue(string $value): void;

    /**
     * {@inheritdoc}
     *
     * @return string
     */
    public function value(): string
    {
        return $this->value;
    }
}
