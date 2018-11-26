<?php

namespace BaseValueObject\Scalar\Password;

use BaseValueObject\Scalar\BaseScalar;
use BaseValueObject\Scalar\ValueObject;
use Webmozart\Assert\Assert;

/**
 * Class SimplePassword
 * @package BaseValueObject\Scalar\Password
 */
class SimplePassword extends BaseScalar implements Password
{
    const MIN_LENGTH = 6;

    private $value;

    /**
     * @inheritdoc
     */
    public static function byCleanPassword(string $cleanPassword): Password
    {
        Assert::minLength($cleanPassword, static::MIN_LENGTH);
        return new self(password_hash($cleanPassword, PASSWORD_DEFAULT));
    }

    /**
     * SimplePassword constructor.
     *
     * @param string $hashedPassword
     */
    public function __construct(string $hashedPassword)
    {
        $this->setByHashedPassword($hashedPassword);
    }

    private function setByHashedPassword(string $hashedPassword): void
    {
        $this->validHashedPassword($hashedPassword);

        $this->value = $hashedPassword;
    }

    private function validHashedPassword($hashedPassword): void
    {
        if (empty(password_get_info($hashedPassword)['algo'])) {
            throw new \InvalidArgumentException(
                'It is not a hashed password.'
            );
        }
    }

    /**
     * {@inheritdoc}
     *
     * @throws \InvalidArgumentException if it is the same password
     */
    public function changePassword(string $cleanPassword): Password
    {
        if ($this->verify($cleanPassword)) {
            throw new \InvalidArgumentException(
                'You can not update with the same password.'
            );
        }

        return self::byCleanPassword($cleanPassword);
    }

    /**
     * @inheritdoc
     */
    public function verify(string $cleanPassword): bool
    {
        return password_verify($cleanPassword, $this->value());
    }

    /**
     * {@inheritdoc}
     *
     * @return string
     */
    public function value(): string
    {
        return $this->value;
    }

    /**
     * This method is not supported
     *
     * @param ValueObject $valueObject
     * @return bool
     * @throws \BadMethodCallException
     */
    public function equals(ValueObject $valueObject): bool
    {
        throw new \BadMethodCallException('Equals is not supported.');
    }

    /**
     * @return string
     */
    public function __toString(): string
    {
        return $this->value();
    }
}
